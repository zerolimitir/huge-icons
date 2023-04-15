import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxFavorite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.265 2.044c-.781.184-1.331 1.005-1.251 1.868.045.494.204.738 1.079 1.66 1.089 1.148 1.145 1.201 1.367 1.31.165.081.26.098.54.098s.375-.017.54-.098c.222-.109.278-.162 1.367-1.31.64-.674.79-.856.911-1.1.625-1.267-.493-2.755-1.815-2.416-.322.083-.483.178-.773.459l-.23.222-.23-.222c-.285-.276-.448-.375-.751-.454a1.57 1.57 0 0 0-.754-.017M3.002 7.498l-.999 1.497 1.688.858C5.97 11.011 9.953 13 9.99 12.999c.016-.001.471-.666 1.01-1.479.539-.813.989-1.478 1-1.478.011 0 .461.665 1 1.478.539.813.994 1.478 1.01 1.479.037.001 4.02-1.988 6.299-3.146l1.688-.858-.999-1.497L20 6l-4 2-4 2-4-2-4-2-.998 1.498'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxFavorite);
export default ForwardRef;
