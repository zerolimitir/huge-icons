import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardiogram = (
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
            d='m12 5.524.765-.822c2.113-2.27 5.538-2.27 7.65 0 1.649 1.771 2.011 4.4 1.088 6.548H16a.75.75 0 0 0-.624.334L14 13.648l-3.376-5.064a.75.75 0 0 0-1.248 0L7.599 11.25H2.497c-.923-2.148-.56-4.777 1.087-6.548 2.113-2.27 5.538-2.27 7.651 0l.765.822ZM3.431 12.75c.05.058.101.115.153.172l6.886 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397a5.62 5.62 0 0 0 .153-.172h-4.168l-1.777 2.666a.75.75 0 0 1-1.248 0L10 10.352l-1.376 2.064A.75.75 0 0 1 8 12.75H3.431Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardiogram);
export default ForwardRef;
