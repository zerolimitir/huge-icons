import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSetting = (
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
            d='M12.954 3h-1.909c-1.054 0-1.909.806-1.909 1.8A1.5 1.5 0 0 1 6.92 6.117l-.101-.055c-.914-.497-2.081-.202-2.608.659l-.955 1.558c-.527.861-.214 1.962.699 2.46 1 .543 1 1.979 0 2.523-.913.497-1.226 1.598-.699 2.459l.955 1.558c.527.861 1.694 1.156 2.608.66l.101-.056A1.5 1.5 0 0 1 9.136 19.2c0 .994.855 1.8 1.91 1.8h1.909c1.054 0 1.909-.806 1.909-1.8a1.5 1.5 0 0 1 2.216-1.317l.102.055c.913.497 2.08.202 2.607-.659l.955-1.558c.527-.861.214-1.962-.699-2.46-1-.543-1-1.979 0-2.523.913-.497 1.226-1.598.699-2.459l-.955-1.558c-.527-.861-1.694-1.156-2.608-.66l-.101.056A1.5 1.5 0 0 1 14.864 4.8c0-.994-.855-1.8-1.91-1.8Z'
            opacity={0.4}
        />
        <circle cx={12} cy={12} r={3} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgSetting);
export default ForwardRef;
