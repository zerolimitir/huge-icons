import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDribbble = (
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
            d='M2 12c0 4.48 2.945 8.27 7.004 9.543A9.994 9.994 0 0 0 12 22a9.975 9.975 0 0 0 7.465-3.346A9.962 9.962 0 0 0 22 12a10.008 10.008 0 0 0-5.065-8.7A9.954 9.954 0 0 0 12 2a9.96 9.96 0 0 0-6.455 2.362A9.978 9.978 0 0 0 2 12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11.106 9.799a31.134 31.134 0 0 0-.833 1.886 16.783 16.783 0 0 0-3.742-.42c-1.566 0-3.086.215-4.53.62A10.186 10.186 0 0 0 2.1 13.42a15.249 15.249 0 0 1 4.431-.655c1.1 0 2.173.117 3.21.34A31.574 31.574 0 0 0 8.077 21.2a9.939 9.939 0 0 0 1.471.496c.17-2.867.738-5.622 1.646-8.206 3.132 1.004 5.853 2.994 7.829 5.628a10.035 10.035 0 0 0 1.005-1.155c-2.122-2.726-4.997-4.8-8.3-5.877.232-.566.48-1.123.745-1.67a16.731 16.731 0 0 0 6.227 1.196 16.8 16.8 0 0 0 3.275-.32 9.981 9.981 0 0 0-.216-1.487 15.3 15.3 0 0 1-3.059.307 15.24 15.24 0 0 1-5.536-1.036 29.234 29.234 0 0 1 4.018-5.631 9.996 9.996 0 0 0-1.387-.7 30.758 30.758 0 0 0-4.005 5.717 16.047 16.047 0 0 1-5.537-4.647 10.044 10.044 0 0 0-1.16.953 17.557 17.557 0 0 0 6.013 5.03Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDribbble);
export default ForwardRef;
