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
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M17.345 3.547a2.22 2.22 0 0 0-.9 1.786 2.222 2.222 0 0 1-2.223 2.223 2.222 2.222 0 0 0 0 4.444c1.228 0 2.222.995 2.222 2.222 0 1.228.995 2.222 2.223 2.222h2.293M17.346 3.547A9.953 9.953 0 0 0 12 2c-5.147 0-9.386 3.889-9.939 8.889m15.284-7.342A9.993 9.993 0 0 1 22 12c0 5.523-4.477 10-10 10a9.958 9.958 0 0 1-6.286-2.222m0 0h2.953a2.222 2.222 0 1 0 0-4.445 2.222 2.222 0 0 1-2.223-2.222 2.222 2.222 0 0 0-2.222-2.222H2.061m3.653 8.889a9.98 9.98 0 0 1-3.653-8.89'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeEarth);
export default ForwardRef;
