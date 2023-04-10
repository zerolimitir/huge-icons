import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgQuiz = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.778 3h1.11c3.146 0 5.783 2.206 6.485 5.173a6.85 6.85 0 0 1 .183 1.577c0 3.728-2.985 6.75-6.667 6.75H4.222C2.995 16.5 2 15.493 2 14.25v-3.375C2 6.525 5.482 3 9.778 3ZM8.75 8A1.25 1.25 0 1 1 10 9.25a.75.75 0 0 0 0 1.5A2.75 2.75 0 1 0 7.25 8a.75.75 0 0 0 1.5 0ZM11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.111 8c-2.311 0-4.348-1.191-5.544-3h3.322c4.528 0 8.167-3.711 8.167-8.25 0-.188-.007-.375-.019-.56A7.897 7.897 0 0 1 22 15.375v3.375c0 1.243-.995 2.25-2.222 2.25H13.11Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgQuiz);
export default ForwardRef;
