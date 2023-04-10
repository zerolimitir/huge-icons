import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoonFlash = (
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
            d='M21.021 9.893a6.5 6.5 0 0 0-4.781-1.349 8.53 8.53 0 0 0-3.925-3.373 5.014 5.014 0 0 1 3.054-2.979c.34-.117.65.202.634.562a4 4 0 0 0 5.502 3.873c.227-.092.495.048.495.293a4.978 4.978 0 0 1-.979 2.973ZM8.683 18.18l3.433-4.12a.5.5 0 0 1 .884.32v2.12a.5.5 0 0 0 .5.5h1.432a.5.5 0 0 1 .385.82l-3.433 4.119a.5.5 0 0 1-.884-.32v-2.12a.5.5 0 0 0-.5-.5H9.068a.5.5 0 0 1-.385-.82ZM2 13a7.002 7.002 0 0 0 5.598 6.86c-.632-.692-.763-1.805-.067-2.64l3.433-4.12c1.197-1.437 3.536-.59 3.536 1.28v1.12h.432c1.696 0 2.623 1.977 1.537 3.28L15.452 20H17a5 5 0 1 0-1.561-9.752 7.027 7.027 0 0 0-3.433-3.572A7 7 0 0 0 2 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonFlash);
export default ForwardRef;
