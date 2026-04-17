import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DELETED_PRODUCTS_FILE = path.join(process.cwd(), 'data', 'deleted-products.json');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Get deleted products
function getDeletedProducts(): number[] {
  ensureDataDir();
  try {
    if (fs.existsSync(DELETED_PRODUCTS_FILE)) {
      const data = fs.readFileSync(DELETED_PRODUCTS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading deleted products:', error);
  }
  return [];
}

// Save deleted products
function saveDeletedProducts(ids: number[]) {
  ensureDataDir();
  fs.writeFileSync(DELETED_PRODUCTS_FILE, JSON.stringify(ids, null, 2));
}

export async function GET() {
  try {
    const deletedProducts = getDeletedProducts();
    return NextResponse.json({ deletedProducts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch deleted products' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { productId, action } = await request.json();

    if (action === 'delete') {
      const deletedProducts = getDeletedProducts();
      if (!deletedProducts.includes(productId)) {
        deletedProducts.push(productId);
        saveDeletedProducts(deletedProducts);
      }
      return NextResponse.json({ success: true, message: 'Product deleted' });
    }

    if (action === 'restore') {
      let deletedProducts = getDeletedProducts();
      deletedProducts = deletedProducts.filter(id => id !== productId);
      saveDeletedProducts(deletedProducts);
      return NextResponse.json({ success: true, message: 'Product restored' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
