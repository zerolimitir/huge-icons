import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFeedRectangle = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm1 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1.744-7.593a.75.75 0 0 1 .837-.651 8.826 8.826 0 0 1 7.651 7.651.75.75 0 0 1-1.488.186 7.325 7.325 0 0 0-6.349-6.349.75.75 0 0 1-.651-.837ZM6 5.25a.75.75 0 0 0 0 1.5c6.213 0 11.25 5.037 11.25 11.25a.75.75 0 0 0 1.5 0c0-7.042-5.708-12.75-12.75-12.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFeedRectangle);
export default ForwardRef;
