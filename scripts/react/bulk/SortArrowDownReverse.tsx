import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSortArrowDownReverse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.807 4.289c-.249.053-.465.281-.523.549-.031.145-.044 1.831-.044 5.67v5.464l-.086-.076a39.14 39.14 0 0 1-.886-.971c-.832-.93-.967-1.042-1.259-1.044a.812.812 0 0 0-.679.418c-.081.156-.078.49.005.651.085.164 1.622 1.891 1.909 2.144.438.387 1.122.634 1.756.634.648 0 1.325-.249 1.778-.655.309-.277 1.796-1.947 1.887-2.12.086-.164.089-.492.004-.654a.81.81 0 0 0-.678-.418c-.292.002-.427.114-1.259 1.044-.44.492-.839.929-.886.971l-.086.076v-5.496c0-3.85-.014-5.544-.044-5.656-.112-.409-.479-.623-.909-.531'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowDownReverse);
export default ForwardRef;
