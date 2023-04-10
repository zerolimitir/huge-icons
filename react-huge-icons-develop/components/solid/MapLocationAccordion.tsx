import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocationAccordion = (
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
            d='M16.75 11.152v10.74c1.692-.457 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.925v-9.67c0-.853-1.028-1.347-1.736-.871-.688.462-1.516.96-2.362 1.332l-.055.162c-.27.766-.643 1.552-1.097 2.274Zm-8 .823v6.86c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-9.072c-.746.673-1.694 1.217-2.788 1.217-.98 0-1.836-.441-2.505-.976a7.442 7.442 0 0 1-1.207-1.243ZM6.59 6.448c-1.495.56-3.006 1.605-3.868 2.257A1.86 1.86 0 0 0 2 10.199v9.67c0 .853 1.028 1.348 1.736.872 1-.672 2.297-1.42 3.514-1.747V9.337c-.392-.974-.64-1.987-.66-2.89Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.568 8.43c.262-.747.412-1.48.412-2.097 0-2.396-2.023-4.338-4.518-4.338-2.315 0-4.223 1.671-4.487 3.825-.02.168-.031.34-.031.513 0 2.395 2.259 6.506 4.518 6.506 1.676 0 3.353-2.263 4.106-4.41Zm-4.106-1.013a1.356 1.356 0 1 0 0-2.71 1.356 1.356 0 0 0 0 2.71Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationAccordion);
export default ForwardRef;
