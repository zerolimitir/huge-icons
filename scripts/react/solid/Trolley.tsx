import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrolley = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.811 1.276c-.653.169-.754 1.071-.156 1.395.101.054.277.071.905.088.721.019.795.028.977.118.251.123.463.335.586.586l.097.197.009 7.24.009 7.24-.243.139c-.748.428-1.146 1.358-.934 2.183.1.389.254.659.536.941.282.282.552.436.941.536.825.212 1.754-.186 2.183-.934l.139-.243 7.6-.001c5.418-.001 7.646-.014 7.759-.046.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.683-.01-7.684-.011-.099-.188a2.253 2.253 0 0 0-.755-.771l-.243-.14-.012-7.3c-.011-6.911-.016-7.313-.084-7.54-.297-.982-1.057-1.73-1.996-1.963-.285-.071-1.649-.115-1.859-.061M9.58 5.047c-.721.138-1.381.801-1.536 1.545-.062.297-.062 8.519 0 8.816.157.75.798 1.391 1.548 1.548.297.062 8.519.062 8.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.297.062-8.519 0-8.816-.159-.762-.818-1.411-1.573-1.549-.304-.055-8.51-.052-8.803.004m5.808 2.32a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.232.331-.233.331-1.616.331s-1.384 0-1.616-.331c-.286-.406-.056-1.011.431-1.132.069-.017.639-.028 1.268-.024l1.143.007.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrolley);
export default ForwardRef;