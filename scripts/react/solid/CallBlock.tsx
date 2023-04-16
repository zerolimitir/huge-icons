import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.58 3.047c-.541.103-1.129.564-1.37 1.073-.191.403-.226.667-.197 1.475.126 3.461 1.332 6.685 3.532 9.445.552.692 1.723 1.863 2.415 2.415 2.395 1.91 5.089 3.051 8.088 3.426.866.108 1.981.147 2.317.082a2.049 2.049 0 0 0 1.591-1.555c.072-.345.058-2.243-.019-2.539a2.03 2.03 0 0 0-.834-1.173c-.112-.075-.752-.357-1.423-.626l-1.22-.49h-1.006l-.342.17a1.999 1.999 0 0 0-.95.93c-.194.373-.104.363-.902.101-2.153-.709-3.974-2.137-5.097-3.997a11.776 11.776 0 0 1-.938-2.026c-.269-.819-.278-.726.091-.918.319-.166.627-.439.823-.727.246-.363.368-.916.298-1.356-.042-.266-.822-2.295-1.049-2.728-.242-.465-.828-.888-1.365-.986-.289-.052-2.162-.05-2.443.004m13-.021a3.464 3.464 0 0 0-.85.261l-.259.123 2.052 2.053c1.129 1.129 2.065 2.044 2.081 2.035.061-.038.272-.613.333-.906.316-1.54-.64-3.077-2.173-3.493-.229-.063-.968-.108-1.184-.073m-2.296 1.698c-.205.454-.261.726-.261 1.276 0 .755.188 1.309.632 1.863.851 1.061 2.267 1.417 3.535.89.159-.066.298-.133.308-.149.009-.016-.908-.954-2.039-2.085l-2.056-2.056-.119.261'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallBlock);
export default ForwardRef;