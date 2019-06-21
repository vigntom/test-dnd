import React from 'react'
import { DragLayer } from 'react-dnd'

const defaultStyle = (item, currentOffset) => {
  return {
    left: item.left + currentOffset.x,
    top: item.top + currentOffset.y,
    position: 'fixed'
  }
}

function DragPreview ({ idDragging, currentOffset, item }) {
  if (!isDragging) return null
  if (!currentOffset) return null
  if (!item.withDragPreview) return null

  return (
    <div style={ defaultStyle(item, currentOffset) }>Dragging</div>
  )
}

const collect = (monitor) => {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}

export default DragLayer(collect)(DragPreview)
