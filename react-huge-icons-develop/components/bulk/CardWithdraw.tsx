import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardWithdraw = (
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
            d='M4 12a2 2 0 0 1 2-2h9a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M15 14H6.167C4.97 14 4 14.895 4 16s.97 2 2.167 2H15a2 2 0 1 0 0-4Z'
        />
        <path fill='currentColor' d='M20 18a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m11.25 5.604-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 0 0-1.06-1.061l-.72.72V2a.75.75 0 0 0-1.5 0v3.604Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardWithdraw);
export default ForwardRef;
