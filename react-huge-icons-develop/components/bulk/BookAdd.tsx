import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookAdd = (
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
        <path fill='currentColor' d='M17 2H7a3 3 0 0 0-3 3v14h16V5a3 3 0 0 0-3-3Z' opacity={0.4} />
        <path fill='currentColor' d='M20 16H7a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.75 6a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V12a.75.75 0 0 0 1.5 0V9.75H15a.75.75 0 0 0 0-1.5h-2.25V6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookAdd);
export default ForwardRef;
