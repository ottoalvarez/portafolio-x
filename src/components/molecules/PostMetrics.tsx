import React from 'react'

import {
  LuHeart,
  LuMessageCircle,
  LuRepeat2,
  LuShare,
  LuBookmark,
  LuChartNoAxesCombined,
} from 'react-icons/lu'
import { Metric } from '../atoms'

interface PostMetricsProps {
  likes: number
  comments: number
  reposts: number
  views: number
}

export const PostMetrics = ({
  likes,
  comments,
  reposts,
  views,
}: PostMetricsProps) => {
  return (
    <div className='flex justify-between pt-2'>
      <Metric value={comments} icon={LuMessageCircle} />
      <Metric value={reposts} icon={LuRepeat2} />
      <Metric value={likes} icon={LuHeart} />
      <Metric value={views} icon={LuChartNoAxesCombined} />
      <Metric icon={LuBookmark} />
      <Metric icon={LuShare} />
    </div>
  )
}
