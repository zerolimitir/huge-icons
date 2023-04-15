import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLinkedln = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.58 2.047c-.721.138-1.381.801-1.536 1.545-.139.665.061 1.32.552 1.812.797.796 2.011.796 2.808 0 .796-.797.796-2.011 0-2.808-.491-.49-1.127-.682-1.824-.549M2 15.26V22h4V8.52H2v6.74m7 0V22h4v-3.573c0-2.393.014-3.651.043-3.81.147-.802.829-1.456 1.652-1.584 1.051-.163 2.073.553 2.262 1.584.029.159.043 1.417.043 3.81V22h4.003l-.013-3.89c-.014-3.872-.014-3.892-.104-4.29-.586-2.59-2.517-4.394-5.097-4.76-.852-.122-1.684-.046-2.699.244-.089.025-.09.021-.09-.379V8.52H9v6.74'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLinkedln);
export default ForwardRef;
