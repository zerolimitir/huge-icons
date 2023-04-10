import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoonWindRain = (
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
            d='M21.021 9.893a6.5 6.5 0 0 0-4.781-1.349 8.53 8.53 0 0 0-3.925-3.373 5.014 5.014 0 0 1 3.054-2.979c.34-.117.65.202.634.562a4 4 0 0 0 5.502 3.873c.227-.092.495.048.495.293a4.978 4.978 0 0 1-.979 2.973Zm-8.742 6.41a.75.75 0 0 1 .417.976l-2 5a.75.75 0 1 1-1.392-.558l2-5a.75.75 0 0 1 .975-.417Zm-3.944.026a.75.75 0 0 1 .336 1.006l-1 2a.75.75 0 0 1-1.342-.67l1-2a.75.75 0 0 1 1.006-.336Zm8 0a.75.75 0 0 1 .336 1.006l-1 2a.75.75 0 0 1-1.342-.67l1-2a.75.75 0 0 1 1.006-.336ZM2 13a6.99 6.99 0 0 0 2.787 5.591c.037-.202.104-.403.2-.596l1-2A2.25 2.25 0 0 1 10 15.968a2.25 2.25 0 0 1 4 0 2.25 2.25 0 0 1 4.012 2.037L17.015 20a5 5 0 1 0-1.576-9.752 7.027 7.027 0 0 0-3.433-3.572A7 7 0 0 0 2 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonWindRain);
export default ForwardRef;
