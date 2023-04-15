import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSadCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.58 9.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m8 0a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-4.1 5.169c-1.008.12-1.908.432-2.62.907-.429.286-.543.424-.596.719-.065.355.199.739.566.828.256.061.454.011.699-.176.449-.343 1.227-.653 1.869-.745.974-.14 2.1.105 2.885.628.543.36.707.402 1.017.259.38-.175.552-.587.398-.955-.083-.198-.185-.302-.518-.528a5.685 5.685 0 0 0-2.056-.844c-.37-.074-1.346-.129-1.644-.093'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSadCircle);
export default ForwardRef;
