import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphonesSilent = (
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
            d='M1.47 2.53a.75.75 0 0 1 1.06-1.06l20 20a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18v-2c0-.217.018-.43.054-.636L5.66 6.721A8.217 8.217 0 0 0 3.75 12v1a3.75 3.75 0 0 1 6 3v2a3.75 3.75 0 1 1-7.5 0v-6a9.71 9.71 0 0 1 2.346-6.344L1.47 2.53Zm5.337 1.216L7.9 4.84A8.25 8.25 0 0 1 20.25 12v1a3.734 3.734 0 0 0-2.25-.75c-.764 0-1.475.229-2.068.621l5.764 5.765c.036-.207.054-.42.054-.636v-6A9.75 9.75 0 0 0 12 2.25c-1.909 0-3.69.548-5.193 1.496Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphonesSilent);
export default ForwardRef;
