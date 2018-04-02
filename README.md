# TSNODE-DI

Simple and lightweight dependency injection for Node TypeScript.

## Getting Started

### Installation

```bash
npm install --save tsnode-di
```

### Usage

```TypeScript
import { Injector } from 'tsnode-di';
import { Injectable } from 'tsnode-di';

@Injectable()
class ProviderClass {
	private aId: number;
	constructor() {
		this.aId = Math.ceil(Math.random() * 100000);
	}
	public get id(): number {
		return this.aId;
	}
}
@Injectable()
class ConsumerClass1 {
    constructor(public provider: ProviderClass) { }
    public get provider():ProviderClass {
        return this.provider;
    }
}
@Injectable()
class ConsumerClass2 {
    constructor(public provider: ProviderClass) { }
    public get provider():ProviderClass {
        return this.provider;
    }
}


// use Injector to resolve the consumer classes

const obj1 = Injector.resolve<ConsumerClass1>(ConsumerClass1);
const obj2 = Injector.resolve<ConsumerClass2>(ConsumerClass2);

// the following statement will not throw, because
// DI will provide the same instance of ProviderClass
// to both ConsumerClass1 and ConsumerClass2!
if(obj1.provider.id !== obj2.provider.id)
    throw new Error("DI Failed!");

```