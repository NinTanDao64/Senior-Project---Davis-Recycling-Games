class Timer
{
	constructor(timerTime) 
	{
		this.timerTime = 0;

		this.startTime = 0;
		this.currentTime = 0;
		this.pausedTime = 0;
		this.missDelayedTime = 0;
		this.matchDelayedTime = 0;
		
		this.timePaused = 0;
		this.missDelayDuration = 750;
		this.matchDelayDuration = 2000;

		this.timerPaused = false;
		this.timerMissDelayed = false;
		this.timerMatchDelayed = false;
	}

	start()
	{
		this.timePaused = 0;
		this.timerPaused = false;
		this.startTime = Date.now();
	}

	update()
	{
		this.currentTime = Date.now();

		if(this.missDelayDuration < this.currentTime - this.missDelayedTime && this.timerMissDelayed)
		{
			this.timerMissDelayed = false;
		}

		if(this.matchDelayDuration < this.currentTime - this.matchDelayedTime && this.timerMatchDelayed)
		{
			this.timerMatchDelayed = false;
			this.timePaused += this.currentTime - this.matchDelayedTime;
		}
	}

	setTimerTime(timerTime)
	{
		this.timerTime = timerTime;
	}

	getTimerTime()
	{
		return this.timerTime;
	}

	getRunTime()
	{
		return this.currentTime - this.startTime - this.timePaused;
	}

	pause()
	{
		this.timerPaused = true;
		this.pausedTime = Date.now(); 
	}

	unpause()
	{
		this.timerPaused = false;
		this.timePaused += Date.now() - this.pausedTime;
	}

	isPaused()
	{
		return this.timerPaused;
	}

	missDelay()
	{
		this.timerMissDelayed = true;
		this.missDelayedTime = Date.now();
	}

	isMissDelayed()
	{
		return this.timerMissDelayed;
	}

	matchDelay()
	{
		this.timerMatchDelayed = true;
		this.matchDelayedTime = Date.now();
	}

	isMatchDelayed()
	{
		return this.timerMatchDelayed;
	}
}