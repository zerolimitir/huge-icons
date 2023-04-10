import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMobileDataOff = (
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
            d='M4.53 3.47a.75.75 0 0 0-1.06 1.06l3.78 3.78v9.862a1.27 1.27 0 0 1-.134-.117L5.53 16.47a.75.75 0 0 0-1.06 1.06l1.585 1.586a2.75 2.75 0 0 0 3.89 0l1.585-1.586a.75.75 0 1 0-1.06-1.06l-1.586 1.585a1.27 1.27 0 0 1-.134.117V9.81l10.72 10.72a.75.75 0 1 0 1.06-1.061l-11.999-12-.001-.001-4-4Zm12.22 2.358v7.861l-1.5-1.5V5.83a1.26 1.26 0 0 0-.134.115L13.53 7.53a.75.75 0 1 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L19.53 6.47a.75.75 0 0 1-1.06 1.06l-1.586-1.586a1.26 1.26 0 0 0-.134-.116Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobileDataOff);
export default ForwardRef;
