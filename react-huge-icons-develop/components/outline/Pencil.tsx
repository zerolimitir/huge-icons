import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPencil = (
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
            d='m3 21-.737-.14a.75.75 0 0 0 .877.877L3 21Zm1.787-5.728-.53-.53.53.53Zm-1.088 2.055-.737-.14.737.14Zm5.03 1.886-.531-.53.53.53Zm-2.056 1.088.14.737-.14-.737Zm13.51-12.543.531.53-.53-.53Zm-3.94-3.942.53.53-.53-.53Zm-1.326 1.485a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm2.722 4.843a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm2.014-2.917L8.198 18.683l1.06 1.06L20.715 8.288l-1.06-1.06ZM5.317 15.802 16.773 4.347l-1.06-1.061L4.256 14.74l1.06 1.061Zm1.216 3.762-3.673.7.28 1.473 3.673-.7-.28-1.473ZM3.737 21.14l.699-3.672-1.474-.281-.699 3.673 1.474.28Zm.52-6.399a4.702 4.702 0 0 0-1.295 2.446l1.474.28c.12-.63.427-1.21.881-1.665l-1.06-1.06Zm3.94 3.942a3.202 3.202 0 0 1-1.664.881l.28 1.474a4.702 4.702 0 0 0 2.446-1.295l-1.061-1.06ZM19.654 4.347a2.037 2.037 0 0 1 0 2.88l1.061 1.06a3.537 3.537 0 0 0 0-5.001l-1.06 1.06Zm1.061-1.061a3.537 3.537 0 0 0-5.002 0l1.06 1.06a2.037 2.037 0 0 1 2.881 0l1.061-1.06ZM13.856 6.36l3.783 3.783 1.06-1.06L14.917 5.3l-1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;
