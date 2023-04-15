import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 10.047C4.707 10.214 4 11.087 4 12c0 .92.69 1.768 1.592 1.956.299.062 12.517.062 12.816 0C19.31 13.768 20 12.92 20 12c0-.932-.71-1.791-1.617-1.957-.306-.056-12.508-.052-12.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;
