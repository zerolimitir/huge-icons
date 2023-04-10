import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSdStorage = (
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
            d='M20 6v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8.657a4 4 0 0 1 1.172-2.829l2.656-2.656A4 4 0 0 1 10.657 2H16a4 4 0 0 1 4 4Zm-2.25-1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5ZM14 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM11.75 5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSdStorage);
export default ForwardRef;
