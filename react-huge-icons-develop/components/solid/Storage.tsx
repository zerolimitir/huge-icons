import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStorage = (
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
            d='M22 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v5.25h20V6Zm0 6.75H2V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5.25Zm-4-8.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM14.75 5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5ZM18 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-3.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStorage);
export default ForwardRef;
