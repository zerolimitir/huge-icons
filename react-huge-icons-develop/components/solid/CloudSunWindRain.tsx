import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunWindRain = (
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
            d='M15.75 2a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V2Zm-3.054 15.279a.75.75 0 1 0-1.392-.558l-2 5a.75.75 0 1 0 1.392.558l2-5Zm-4.025.056a.75.75 0 0 0-1.342-.67l-1 2a.75.75 0 0 0 1.342.67l1-2Zm8 0a.75.75 0 0 0-1.342-.67l-1 2a.75.75 0 0 0 1.342.67l1-2ZM20.48 3.52a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.061l.706-.707a.75.75 0 0 1 1.061 0ZM22 9.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5h1Zm-3.004-.937a4 4 0 0 0-5.963-3.297 8.534 8.534 0 0 1 3.207 3.028 6.554 6.554 0 0 1 2.756.269ZM2 13a6.99 6.99 0 0 0 2.787 5.59c.037-.202.104-.403.2-.596l1-2A2.25 2.25 0 0 1 10 15.969a2.25 2.25 0 0 1 4 0 2.25 2.25 0 0 1 4.012 2.037L17.015 20a5 5 0 1 0-1.576-9.751 7.026 7.026 0 0 0-3.63-3.662A7 7 0 0 0 2 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunWindRain);
export default ForwardRef;
