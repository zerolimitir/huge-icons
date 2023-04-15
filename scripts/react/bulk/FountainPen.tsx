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
            d='M6.58 2.047C5.707 2.214 5 3.087 5 4c0 .92.69 1.768 1.592 1.956.298.062 10.518.062 10.816 0C18.31 5.768 19 4.92 19 4c0-.932-.71-1.791-1.617-1.957-.306-.055-10.509-.052-10.803.004m4.904 8.016a2.089 2.089 0 0 0-1.422 1.436 2.07 2.07 0 0 0 .158 1.42c.141.279.539.69.8.826l.22.115v7.894l.23.113c.19.093.282.113.53.113.248 0 .34-.02.53-.113l.23-.113v-7.902l.17-.076c.231-.103.715-.588.845-.845.3-.594.298-1.299-.006-1.868-.139-.261-.571-.693-.832-.832a2.11 2.11 0 0 0-1.453-.168'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFountainPen);
export default ForwardRef;
