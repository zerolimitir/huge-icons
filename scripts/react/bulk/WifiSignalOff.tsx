import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiSignalOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.807 2.289c-.375.08-.605.481-.518.901.038.181.116.267 1.703 1.859.915.918 1.656 1.675 1.646 1.682a18.097 18.097 0 0 0-2.104 1.422c-.664.531-.868.899-.871 1.567-.001.428.061.659.27 1.005.28.462 7.479 10.142 7.705 10.36a1.976 1.976 0 0 0 2.676.053c.109-.098.804-.996 1.546-1.998.74-1.001 1.359-1.82 1.374-1.82.014 0 .998.972 2.186 2.16 2.331 2.332 2.308 2.312 2.68 2.27a.741.741 0 0 0 .583-1.056C21.586 20.48 3.574 2.451 3.36 2.354a.805.805 0 0 0-.553-.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalOff);
export default ForwardRef;
