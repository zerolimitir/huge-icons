import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDescription = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.579 1.28c-2.116.185-3.816 1.731-4.246 3.86-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.338.068.701.073 5.86.073 5.159 0 5.522-.005 5.86-.073 1.929-.39 3.352-1.78 3.788-3.703.086-.381.087-.422.102-5.174L21.764 9h-.782l.269-.271.268-.27L18.02 4.96l-3.499-3.499-.26.258-.261.259V1.24l-3.55.006c-1.952.003-3.694.018-3.871.034m6.672 2.89c.019 1.226.033 1.46.105 1.794a4.757 4.757 0 0 0 3.68 3.68c.334.072.568.086 1.795.105l1.411.021-.011 4.445-.011 4.445-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H6.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.48-.183.509-.184 4.033-.188l3.345-.003.021 1.41m5.78 4.064a16.38 16.38 0 0 1-.911-.004c-.712-.015-.808-.026-1.1-.123-.531-.177-.875-.394-1.304-.823-.429-.428-.645-.772-.823-1.304-.102-.302-.108-.371-.123-1.24l-.015-.92 2.203 2.2c2.145 2.141 2.2 2.2 2.073 2.214m-11.22 2.044a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025m0 5a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.224.063 8.214.063 8.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-4.143-.006c-2.279-.004-4.201.007-4.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDescription);
export default ForwardRef;