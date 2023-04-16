import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBellCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.654 3.041a6.676 6.676 0 0 0-2.794.969c-.198.124-1.017.747-1.82 1.386-1.854 1.476-2.135 1.631-3.22 1.783-.332.047-.512.096-.732.201-.989.469-1.383 1.709-.835 2.629.056.094 2.168 2.234 4.694 4.755 4.37 4.361 4.606 4.589 4.853 4.697.362.159.874.185 1.272.064a1.906 1.906 0 0 0 1.262-1.225c.035-.11.092-.392.126-.626.094-.644.281-1.136.624-1.643.086-.126.627-.819 1.203-1.54 1.163-1.456 1.344-1.713 1.656-2.351.429-.879.614-1.634.645-2.642.024-.771-.015-1.159-.185-1.833-.753-2.981-3.631-4.952-6.749-4.624M7.78 15.897c-.281.125-.445.456-.541 1.09-.146.962.306 2.141 1.076 2.808.351.305.783.553 1.205.694.357.12.415.127.96.127.524 0 .612-.011.908-.109.456-.152.606-.358.488-.671-.037-.098-.636-.785-1.756-2.012-1.753-1.922-1.822-1.987-2.111-1.982a.67.67 0 0 0-.229.055'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellCrooked);
export default ForwardRef;