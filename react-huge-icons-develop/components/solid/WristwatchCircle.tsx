import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWristwatchCircle = (
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
            d='M17 4v1.125A8.462 8.462 0 0 0 12 3.5a8.462 8.462 0 0 0-5 1.625V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm-5 16.5a8.461 8.461 0 0 1-5-1.625V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.125a8.461 8.461 0 0 1-5 1.625Zm7-8.5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-7-3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.415.67l-2 1a.75.75 0 1 1-.67-1.34l1.585-.793V9a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWristwatchCircle);
export default ForwardRef;
