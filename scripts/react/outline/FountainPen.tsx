import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFountainPen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.656 1.281a2.407 2.407 0 0 0-.869.263A2.788 2.788 0 0 0 4.335 3.32c-.095.35-.095 1.01 0 1.36.206.76.734 1.419 1.411 1.763.14.071.254.144.254.162 0 .018-.354 1.127-.786 2.464-.433 1.337-.819 2.575-.859 2.751-.253 1.121-.029 2.42.585 3.398.207.329 5.287 6.533 5.695 6.954.276.285.668.488 1.075.556a1.915 1.915 0 0 0 1.655-.556c.347-.358 5.466-6.596 5.663-6.9.635-.981.867-2.27.618-3.432-.04-.187-.426-1.434-.859-2.771A165.241 165.241 0 0 1 18 6.604c0-.019.097-.082.216-.14.687-.337 1.238-1.014 1.449-1.784.096-.351.096-1.009 0-1.36a2.784 2.784 0 0 0-1.463-1.782c-.593-.293-.189-.274-6.042-.282-2.893-.004-5.37.008-5.504.025m10.881 1.596c.251.123.463.335.586.586.14.284.139.791-.001 1.076a1.306 1.306 0 0 1-.665.619c-.218.081-.266.082-5.457.082s-5.239-.001-5.457-.082a1.301 1.301 0 0 1-.664-.619c-.115-.236-.152-.655-.079-.885.121-.379.424-.698.791-.834.124-.046 1.031-.054 5.449-.047l5.3.007.197.097m-.262 6.393c1.009 3.125.926 2.83.953 3.352a3.116 3.116 0 0 1-.422 1.778c-.076.131-4.754 5.861-5.011 6.138-.02.022-.035-1.219-.035-2.925V14.65l.235-.088c.485-.181.993-.594 1.299-1.056.912-1.374.401-3.23-1.092-3.968A2.57 2.57 0 0 0 12 9.271c-.46 0-.825.081-1.204.268a2.743 2.743 0 0 0-1.351 3.474 2.874 2.874 0 0 0 1.605 1.568l.19.07v2.962c0 1.69-.015 2.947-.035 2.925-.271-.295-4.935-6.008-5.011-6.138a3.118 3.118 0 0 1-.422-1.778c.027-.522-.056-.228.953-3.352l.81-2.51h8.929l.811 2.51m-4.738 1.608c.25.122.463.334.586.585.14.284.139.791-.001 1.076-.459.932-1.79.932-2.243 0-.115-.236-.152-.655-.079-.885.12-.378.42-.694.791-.835.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFountainPen);
export default ForwardRef;