import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAudioBook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.726 6.644c-.297.09-.572.351-.684.649-.027.072-.042.686-.042 1.711 0 1.723 0 1.724.218 2.01.056.073.196.185.312.249.172.095.258.116.477.116.266.001.267.001 1.803-.766 1.354-.675 1.557-.789 1.697-.948a.988.988 0 0 0 0-1.33c-.14-.159-.341-.272-1.683-.941-1.313-.654-1.554-.761-1.744-.775a1.188 1.188 0 0 0-.354.025M6.38 16.059c-1.62.357-2.649 1.921-2.318 3.522a2.993 2.993 0 0 0 2.357 2.357C6.678 21.992 7.4 22 12 22c5.777 0 5.556.008 6.15-.233a3.08 3.08 0 0 0 1.617-1.617c.216-.53.233-.718.233-2.508V16l-6.69.003c-5.392.003-6.737.014-6.93.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAudioBook);
export default ForwardRef;
