/*
 * @des: ''
 * @author: fengbin.chen
 */
import { ref  } from 'vue';

export function useDefer(maxFrameCount){
  const frameCount = ref(0);
  const refreshFrameCount = () => {
    requestAnimationFrame(()=> {
      frameCount.value ++;
      if(frameCount.value < maxFrameCount) {
        refreshFrameCount
      }
    })
  }
  refreshFrameCount();
  return function (showInFrameCount)  {
    return frameCount.value>= showInFrameCount
  }
}