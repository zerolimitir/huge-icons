import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAnnouncement = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.487 2.806a.797.797 0 0 0-.269.23c-.114.173-.498 1.574-.498 1.817 0 .216.101.41.294.564.139.112.18.123.443.123.255 0 .307-.013.436-.112a.846.846 0 0 0 .203-.221c.031-.059.149-.45.263-.868.155-.569.203-.806.19-.948a.731.731 0 0 0-1.062-.585m1.633 4.828a.707.707 0 0 0-.392.605c-.015.203-.002.264.087.416a.878.878 0 0 0 .235.259c.157.097 1.593.486 1.79.485a.735.735 0 0 0 .682-.506c.101-.305-.057-.736-.318-.871-.191-.099-1.583-.462-1.771-.462a.783.783 0 0 0-.313.074M3.64 11.703c-.453.12-.887.542-1.021.992-.079.267-.073.679.015.925.067.189 2.485 4.41 2.732 4.769.39.567 1.31.753 1.936.391.228-.132.487-.426.608-.691.123-.268.164-.712.092-.997-.061-.244-2.642-4.727-2.855-4.96a1.5 1.5 0 0 0-1.507-.429m8.58 4.527c-.814.19-1.485.348-1.492.352-.036.024 3.026 4.748 3.18 4.905.486.497 1.307.571 1.889.172.565-.388.8-1.207.519-1.81-.133-.283-2.527-3.969-2.576-3.966-.022.002-.706.158-1.52.347'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAnnouncement);
export default ForwardRef;
