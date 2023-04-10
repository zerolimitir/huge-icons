import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudFlash = (
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
            d='M2 10c0 3.2 2.147 5.898 5.079 6.733-.063-.51.07-1.054.452-1.514l3.433-4.118c1.197-1.437 3.536-.59 3.536 1.28V13.5h.432c1.696 0 2.623 1.978 1.537 3.28l-.183.22H17a5 5 0 1 0-1.561-9.751A7.002 7.002 0 0 0 2 10Zm10.116 2.061L8.683 16.18a.5.5 0 0 0 .384.82H10.5a.5.5 0 0 1 .5.5v2.12a.5.5 0 0 0 .884.32l3.433-4.12a.5.5 0 0 0-.385-.82H13.5a.5.5 0 0 1-.5-.5v-2.119a.5.5 0 0 0-.884-.32Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudFlash);
export default ForwardRef;
