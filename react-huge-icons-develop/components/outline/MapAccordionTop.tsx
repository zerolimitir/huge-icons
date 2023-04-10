import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordionTop = (
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
            strokeWidth={1.5}
            d='M19.893 6.27c0 2.361-2.227 6.414-4.454 6.414S10.985 8.63 10.985 6.27c0-2.361 1.995-4.276 4.454-4.276 2.46 0 4.454 1.915 4.454 4.276Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M16.776 6.003a1.336 1.336 0 1 1-2.673 0 1.336 1.336 0 0 1 2.673 0ZM8 6.036c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 10.148v9.67c0 .853 1.028 1.348 1.736.871 1.21-.812 2.853-1.735 4.264-1.893m0-12.76v12.76m0-12.76c1.22-.137 2.175.308 3.06.906M8 18.796c3.318-.372 4.682 3.561 8 3.19m0 0c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.873v-9.67c0-.853-1.028-1.348-1.736-.872-.227.152-.468.308-.721.462M16 21.986V12.56'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionTop);
export default ForwardRef;
