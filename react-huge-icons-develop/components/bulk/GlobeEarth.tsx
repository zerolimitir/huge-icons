import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobeEarth = (
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
            d='M12 22c5.523 0 10-4.477 10-10a9.993 9.993 0 0 0-4.655-8.453A9.953 9.953 0 0 0 12 2c-5.147 0-9.386 3.889-9.939 8.889a9.98 9.98 0 0 0 3.653 8.889A9.958 9.958 0 0 0 12 22Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M18.667 16.444a2.222 2.222 0 0 1-2.223-2.222A2.222 2.222 0 0 0 14.222 12a2.222 2.222 0 1 1 0-4.445 2.222 2.222 0 0 0 2.222-2.222c0-.732.355-1.382.9-1.786A9.993 9.993 0 0 1 22 12a9.958 9.958 0 0 1-1.04 4.444h-2.293ZM4.222 10.889c1.228 0 2.222.995 2.222 2.222 0 1.227.995 2.222 2.223 2.222a2.222 2.222 0 1 1 0 4.445H5.714a9.98 9.98 0 0 1-3.653-8.89h2.161Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeEarth);
export default ForwardRef;
