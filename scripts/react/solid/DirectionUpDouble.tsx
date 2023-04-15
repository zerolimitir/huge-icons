import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionUpDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 6.278c-.163.04.016-.098-2.911 2.245-1.596 1.277-2.508 2.033-2.559 2.121a.722.722 0 0 0-.079.36c-.001.505.491.868.959.707.103-.035.988-.718 2.47-1.903L12 7.959l2.309 1.849c1.482 1.185 2.367 1.868 2.47 1.903.468.161.96-.202.959-.707a.722.722 0 0 0-.079-.36c-.051-.088-.992-.867-2.665-2.207a196.91 196.91 0 0 0-2.66-2.109c-.114-.06-.379-.085-.523-.05m0 6c-.163.04.016-.098-2.911 2.245-1.596 1.277-2.508 2.033-2.559 2.121a.722.722 0 0 0-.079.36c-.001.505.491.868.959.707.103-.035.988-.718 2.47-1.903L12 13.959l2.309 1.849c1.482 1.185 2.367 1.868 2.47 1.903.468.161.96-.202.959-.707a.722.722 0 0 0-.079-.36c-.051-.088-.992-.867-2.665-2.207a196.91 196.91 0 0 0-2.66-2.109c-.114-.06-.379-.085-.523-.05'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionUpDouble);
export default ForwardRef;
