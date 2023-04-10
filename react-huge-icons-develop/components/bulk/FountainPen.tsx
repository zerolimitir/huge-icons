import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFountainPen = (
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
        <path fill='currentColor' d='M17 6H7a2 2 0 1 1 0-4h10a2 2 0 1 1 0 4Z' />
        <path
            fill='currentColor'
            d='M17.008 6H6.992l-1.714 5.328a3.944 3.944 0 0 0 .474 3.769l5.296 6.429c.45.632 1.453.632 1.904 0l5.296-6.43a3.945 3.945 0 0 0 .474-3.768L17.008 6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12.75 13.855a2 2 0 1 0-1.5 0v7.886a1.215 1.215 0 0 0 1.5 0v-7.886Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFountainPen);
export default ForwardRef;
