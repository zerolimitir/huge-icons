import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNotificationRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.34 2.043a5.158 5.158 0 0 0-2.766 1.328c-.734.697-1.189 1.485-1.443 2.498-.097.387-.108.503-.108 1.131s.011.744.108 1.131c.255 1.019.721 1.822 1.457 2.513.663.623 1.348.99 2.29 1.228.382.096.49.106 1.142.104.676-.002.749-.01 1.2-.129 1.643-.433 2.976-1.666 3.498-3.238.204-.612.254-.932.254-1.609 0-.497-.018-.7-.089-1.02-.442-1.968-1.892-3.426-3.843-3.863-.404-.091-1.297-.13-1.7-.074m-10.907 4a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v9.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.396.081.516.083 4.774.083s4.378-.002 4.774-.083a4.004 4.004 0 0 0 3.097-2.905l.107-.392.013-2.594.012-2.594-.231.023c-.639.065-.789.068-1.245.028a6 6 0 0 1-1.587-.328 6.493 6.493 0 0 1-3.145-2.272c-.349-.464-.799-1.322-.973-1.859-.237-.729-.28-1.047-.281-2.074L10.54 6l-2.44.005c-1.342.003-2.542.02-2.667.038'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationRectangle);
export default ForwardRef;
