import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTiktok = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13 9.116c0 6.877.016 6.484-.296 7.144-.331.699-.881 1.233-1.553 1.506-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a2.893 2.893 0 0 1 1.442-1.442c.399-.186.59-.241.99-.281l.27-.028v-3l-.365.027c-.82.062-1.507.239-2.18.561-1.754.841-2.915 2.317-3.344 4.253-.125.565-.125 1.775 0 2.34.54 2.438 2.282 4.18 4.715 4.717.571.126 1.777.126 2.348 0 2.432-.536 4.162-2.266 4.715-4.713.088-.39.089-.433.102-4.182l.012-3.789.349.174c.431.215.945.392 1.468.505.315.068.588.09 1.29.107l.89.021V6l-.65-.001c-.682 0-1.013-.047-1.425-.201-.706-.264-1.288-.814-1.627-1.538-.186-.399-.241-.59-.281-.99L15.989 3H13v6.116'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTiktok);
export default ForwardRef;
