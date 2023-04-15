import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUnderline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.807 3.288c-.257.056-.467.283-.526.566-.033.161-.041 1.256-.03 4.014.014 3.287.025 3.835.081 4.112.118.583.268 1.034.505 1.52A5.642 5.642 0 0 0 9.5 16.163c.817.399 1.558.568 2.5.568s1.683-.169 2.5-.568c1.677-.82 2.784-2.282 3.168-4.183.056-.277.067-.825.081-4.112.011-2.758.003-3.853-.03-4.014-.141-.68-1.075-.806-1.383-.186-.073.145-.077.333-.098 4.112-.022 3.928-.023 3.963-.111 4.268-.445 1.554-1.56 2.662-3.1 3.081-.28.076-.428.089-1.027.089s-.747-.013-1.027-.089c-1.524-.415-2.641-1.511-3.085-3.029l-.105-.36-.021-3.96c-.021-3.779-.025-3.967-.098-4.112-.116-.234-.279-.341-.624-.407a.896.896 0 0 0-.233.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUnderline);
export default ForwardRef;
