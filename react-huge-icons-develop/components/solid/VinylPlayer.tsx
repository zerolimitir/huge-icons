import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVinylPlayer = (
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
            d='M22.75 2a.75.75 0 0 0-1.5 0v2.063c0 .371-.165.723-.45.96l-.945.788A9.982 9.982 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.955 9.955 0 0 0-1.302-4.938l1.063-.886a2.75 2.75 0 0 0 .989-2.113V2Zm-2.052 5.062a10.03 10.03 0 0 0-.843-1.251L15.52 9.424a.75.75 0 1 0 .96 1.152l4.218-3.514ZM12 17.25A5.25 5.25 0 0 1 6.75 12a.75.75 0 0 0-1.5 0A6.75 6.75 0 0 0 12 18.75a.75.75 0 0 0 0-1.5ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVinylPlayer);
export default ForwardRef;
