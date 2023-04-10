import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoadingDashed = (
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
            d='M11.25 5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 20a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5ZM6.52 7.58a.75.75 0 1 0 1.06-1.06L6.52 7.58ZM5.46 4.4a.75.75 0 0 0-1.061 1.06l1.06-1.06Zm13.08 15.2a.75.75 0 1 0 1.061-1.06l-1.06 1.06Zm-1.06-3.182a.75.75 0 0 0-1.06 1.061l1.06-1.06ZM19 11.25a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm-20-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm11.42-6.23a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm3.18-1.06a.75.75 0 1 0-1.06-1.061l1.06 1.06ZM4.4 18.54a.75.75 0 0 0 1.06 1.061l-1.06-1.06Zm3.182-1.06a.75.75 0 0 0-1.061-1.06l1.06 1.06ZM12.75 5V2h-1.5v3h1.5Zm0 17v-3h-1.5v3h1.5ZM7.58 6.52 5.46 4.399l-1.061 1.06 2.12 2.122L7.582 6.52Zm12.021 12.02-2.12-2.12-1.062 1.06 2.122 2.121 1.06-1.06ZM19 12.75h3v-1.5h-3v1.5Zm-17 0h3v-1.5H2v1.5Zm15.48-5.17 2.121-2.12-1.06-1.061-2.122 2.12 1.061 1.062ZM5.46 19.602l2.12-2.12-1.06-1.062-2.121 2.122 1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDashed);
export default ForwardRef;
