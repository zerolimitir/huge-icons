import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilter = (
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
            d='M18.819 2H5.18C3.442 2 2.405 3.916 3.37 5.346l5.722 7.481c.477.707.731 1.538.731 2.388v5.707c0 .959 1.173 1.438 1.86.76l2.177-2.151a1.07 1.07 0 0 0 .319-.761v-3.555c0-.85.254-1.68.73-2.388l5.723-7.481C21.595 3.916 20.558 2 18.819 2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M18.819 2H5.18C3.442 2 2.405 3.916 3.37 5.346l5.722 7.481c.242.359.426.749.55 1.157l4.713.017c.123-.414.31-.81.555-1.174l5.722-7.481C21.595 3.916 20.558 2 18.819 2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;
