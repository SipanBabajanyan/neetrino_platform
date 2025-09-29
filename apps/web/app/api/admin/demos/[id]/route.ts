import { NextRequest, NextResponse } from 'next/server';
const { demoData } = require('../../../../../lib/demo-data.js');

// GET - получить конкретное демо
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const demo = demoData.getById(id);
    
    if (!demo) {
      return NextResponse.json(
        { success: false, error: 'Demo not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: demo
    });
  } catch (error) {
    console.error('Admin demo GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch demo' },
      { status: 500 }
    );
  }
}

// PUT - обновить демо
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const updatedDemo = demoData.update(id, {
      title: body.title,
      description: body.description,
      url: body.url,
      status: body.status,
      category: body.category,
      subcategory: body.subcategory,
      imageUrl: body.imageUrl,
    });
    
    if (!updatedDemo) {
      return NextResponse.json(
        { success: false, error: 'Demo not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedDemo,
      message: 'Demo updated successfully'
    });
  } catch (error) {
    console.error('Admin demo PUT error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update demo' },
      { status: 500 }
    );
  }
}

// DELETE - удалить демо
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('🗑️ API: Начинаем удаление демо с ID:', id);
    
    const success = demoData.delete(id);
    console.log('🗑️ API: Результат удаления:', success);
    
    if (!success) {
      console.log('❌ API: Демо не найдено для удаления');
      return NextResponse.json(
        { success: false, error: 'Demo not found' },
        { status: 404 }
      );
    }

    console.log('✅ API: Демо успешно удалено');
    return NextResponse.json({
      success: true,
      message: 'Demo deleted successfully'
    });
  } catch (error) {
    console.error('💥 API: Критическая ошибка при удалении:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete demo' },
      { status: 500 }
    );
  }
}