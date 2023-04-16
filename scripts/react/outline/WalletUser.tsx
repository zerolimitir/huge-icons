import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.579 1.278c-2.04.188-3.76 1.683-4.198 3.65l-.066.3-.948.025c-1.025.026-1.457.089-1.991.29-1.589.597-2.703 1.914-3.043 3.597-.068.335-.073.668-.073 4.86s.005 4.525.073 4.86c.39 1.929 1.785 3.356 3.703 3.787.373.084.481.087 3.635.102 2.362.012 3.311.004 3.473-.03.682-.141.809-1.075.188-1.383-.144-.072-.321-.077-3.572-.096l-3.42-.02-.32-.11c-.538-.184-.878-.399-1.304-.826-.428-.428-.645-.771-.824-1.304-.101-.303-.108-.369-.123-1.267l-.016-.946 1.853-.017c1.774-.016 1.867-.021 2.154-.106a2.79 2.79 0 0 0 1.883-1.904 3.062 3.062 0 0 0 0-1.48 2.79 2.79 0 0 0-1.883-1.904c-.287-.085-.38-.09-2.154-.106l-1.853-.017.016-.946c.015-.898.022-.964.123-1.267.179-.533.396-.876.824-1.304.426-.426.766-.642 1.304-.826l.32-.11 7.949-.011 7.949-.01.011 3.23.011 3.231.093.149c.362.583 1.228.441 1.366-.223.033-.159.041-1.256.03-3.973-.014-3.68-.016-3.761-.101-4.137-.426-1.884-1.803-3.26-3.684-3.683-.375-.084-.463-.087-3.724-.095-1.837-.005-3.484.004-3.661.02M18.98 2.89c.539.185.878.4 1.304.826.404.405.613.722.784 1.194.051.139.092.271.092.292 0 .024-2.276.038-6.16.038-3.884 0-6.16-.014-6.16-.038 0-.09.196-.568.338-.824.207-.372.825-.992 1.194-1.196.15-.083.366-.187.48-.231.489-.187.481-.186 4.248-.178l3.56.007.32.11M6.454 12.841c.29.109.596.415.705.705.176.471.068.975-.285 1.328-.367.367-.359.366-2.376.366H2.76v-2.48h1.738c1.649 0 1.75.004 1.956.081m12.206 2.437c-.884.107-1.633.623-2.092 1.442-.4.713-.4 1.843-.001 2.56.068.121.187.3.266.397.084.103.125.184.098.193-.111.037-.574.422-.817.681-.388.412-.746.962-.831 1.277-.14.52.369 1.029.888.889.257-.069.368-.171.577-.528.269-.461.775-.962 1.172-1.161.398-.2.67-.267 1.08-.267.41 0 .682.067 1.08.267.397.199.903.7 1.172 1.161.209.357.32.459.577.528.519.14 1.028-.369.888-.889-.085-.315-.443-.865-.831-1.277-.243-.259-.706-.644-.817-.681-.027-.009.014-.09.098-.193.643-.793.759-2.077.265-2.957-.575-1.026-1.636-1.578-2.772-1.442m.794 1.563c.29.109.596.415.705.705.176.471.068.975-.285 1.328a1.216 1.216 0 0 1-1.748 0c-.279-.278-.38-.549-.357-.954.021-.353.107-.547.355-.795.273-.272.473-.356.864-.362.16-.002.327.026.466.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletUser);
export default ForwardRef;