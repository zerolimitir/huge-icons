import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInformationRectangle = (
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
            d='M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-5.25 6a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V8Zm0 3.5a.75.75 0 0 0-1.5 0V16a.75.75 0 0 0 1.5 0v-4.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInformationRectangle);
export default ForwardRef;
