import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPaintBoard = (
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
            d='M10.013 21.802C5.442 20.881 2 16.842 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10a9.969 9.969 0 0 1-2.945 7.087c-1.052 1.047-2.61.13-2.61-1.354v-1.289a2.222 2.222 0 1 0-4.445 0V20c0 1.105-.905 2.02-1.987 1.802ZM9.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM8 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaintBoard);
export default ForwardRef;
